const uuidv4 = require('uuid/v4');
let items = [
         {
            id: uuidv4(),
            name: "ABC Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            level:  0 // 0 small, 1 Medium, 2 High
          },
          {
            id: uuidv4(),
            name: "DEF Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            level:  1 // 0 small, 1 Medium, 2 High
          },
          {
            id: uuidv4(),
            name: "XYZ Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            level:  2 // 0 small, 1 Medium, 2 High
          },
          {
            id: uuidv4(),
            name: "KLM Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            level:  0 // 0 small, 1 Medium, 2 High
          }
    ]
 export default items;
