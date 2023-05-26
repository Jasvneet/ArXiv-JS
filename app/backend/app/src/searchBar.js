class searchBar {
    constructor(onSearch) {
      this.onSearch = onSearch;
      this.searchQuery = '';
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
      const input = document.querySelector('search-input');
      input.addEventListener('input', this.handleInputChange);
     
      const button = document.querySelector('.search-button');
  
      button.addEventListener('click', this.handleSubmit);
    }
  
    handleInputChange(event) {
      this.searchQuery = event.target.value;
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.onSearch(this.searchQuery);
    }
}

    // export default searchBar;
    
    
    
    
    
    
    
    
    
   
    



    // function handleSearch(searchQuery) {
    //     // Perform the search operation based on the search query
    //     console.log('Searching for:', searchQuery);
    //   }

    // function handleInputChange(event) {
    //     const searchQuery = event.target.value;
    //     // Update the search query state or perform any other logic
    //   }
    
    //   function handleSearchClick() {
    //     const searchQuery = input.value;
    //     onSearch(searchQuery);

    //     // event listener for the search button's click event. When the button is clicked, it retrieves the current value of the input field and calls the onSearch callback function, passing the search query as an argument.


    //   }
    
