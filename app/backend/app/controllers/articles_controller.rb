require 'net/http'
require 'uri'

class ArticlesController < ApplicationController
    def index
      url = URI.parse('http://export.arxiv.org/oai2?verb=ListSets')
      http = Net::HTTP.new(url.host, url.port)
      request = Net::HTTP::Get.new(url.request_uri)
    
      response = http.request(request)
    
      if response.code == '200'
        data = response.body
        categories = extract_categories(data)
        @categories = categories.uniq
      else
        # Handle the error case when the API call fails
        @categories = []
      end
    end
    
    def extract_categories(data)
      categories = []
      data.scan(/<setSpec>(.*?)<\/setSpec>/) do |match|
        categories << match[0]
      end
      categories
    end
    
    def show
        category = params[:category]
        articles = fetch_articles_by_category(category)
        render json: articles
    end
end
