
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

    if response.is_a?(Net::HTTPSuccess)
      data = response.body
      parse_articles(data)
    else
      { error: 'Failed to fetch articles' }
    end
  

end
    
def parse_articles(data)
  # Parse the data and extract the relevant information
  # Modify this part based on the structure of the arXiv API response
  # For example, assuming the API response is XML:
  xml_data = REXML::Document.new(data)
  articles = []

  xml_data.elements.each('feed/entry') do |entry|
    title = entry.elements['title'].text
    authors = entry.elements['author'].text
    abstract = entry.elements['summary'].text

    articles << {
      title: title,
      authors: authors,
      abstract: abstract
    }
  end

  articles
end