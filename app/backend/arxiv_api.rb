
require 'rexml/document'
require 'net/http'
require 'uri'




def fetch_articles_by_category(category)
    base_url = 'http://export.arxiv.org/api/query?'
    search_query = "cat:#{category}"
    start = 0
    max_results = 1000 
 

    query = "search_query=#{search_query}&start=#{start}&max_results=#{max_results}"

    url = URI.parse("#{base_url}?#{query}")

    response = Net::HTTP.get_response(url)

    # if response.is_a?(Net::HTTPSuccess)
    #     doc = REXML::Document.new(response.body)
    #     articles = doc.elements.to_a('//entry')
    
    #     process_articles(articles)
    #   else
    #     # Handle the API error case
    #     puts "Error: #{response.code} - #{response.message}"
    
    # end 
    p response.body

end
    
    def process_articles(articles)
      category_counts = Hash.new(0)
    
      articles.each do |article|
        # Access the categories for each article
        categories = article.get_elements('category')
    
        # Increment the count for each category
        categories.each do |category|
          term = category.attribute('term').to_s
          category_counts[term] += 1
        end
      end
    
      category_counts
    end
    
    # Fetch and process the articles for a specific category
    article_counts = fetch_articles_by_category('physics')
    
    # Output the counts
    # article_counts.each do |category, count|
    #   puts "#{category}: #{count}"
   
    # end

