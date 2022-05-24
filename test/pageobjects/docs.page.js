/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class DocsPage {

      get docsButton() {
          return $('//*[contains(text(),"Docs")][@href]')
      }
      clickDocsButton() {
      this.docsButton.click()
      }
        }
    
    module.exports = new DocsPage();