# How to run the Qantas hotel search app
#### Clone the repository or download Qantas.Interview folder
#### open command prompt and navigate to the Qantas.Interview folder
#### Run  -> npm install
#### Run -> npm start
#### For the execution of the the unit test  -> npm test

# Component design

###### The hotel search component is split into two components:
######  HotelSearchContainer 
######       SearchPanel   
######        SearchResult 
###### Based on the criteria selected from the SearchPanel (currently only sort by ), an event will be triggered in the container component, and the SearchResult  component  will be refreshed accordingly

###### Each hotel display is controlled by the CardComponent, which enhances maintainability and readability of components



![image](https://github.com/user-attachments/assets/a224b15f-ab0a-44ce-aa96-671f94aec8ee)


