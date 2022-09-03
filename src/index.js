import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

/*  display comments on screen */




/* 
    ** SEMANTIC UI **
1. <!-- integrating sematic ui in html for default styling -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
2. check if loaded completely on network tab -> css

    ** FAKER JS **
1. run npm install --save faker ..for our local project   

    ** COMPONENTS **
1. tenets of components include nesting, reusability and configuarability
2. making resuable components- Component Nesting
->identify jsx that are duplicated in our comp 
->create a separate file for it bearing a separate component
->nest the child component to the main component

    ** PROPS **
1. its a system for passing data from a parent comp to a child comp by customising it
2. referencing props objs in child comp as an argument and assessing each property key using dot notation
3. Component Reusability 
-> creating a reusable comp and passing a child comp etc inside the parent comp will render the child comp as children and can be referenced as props.children
-> <ApprovalCard>props children</ApprovalCard>

*/

//functional react component 
const App = () => {
    //return jsx
    return <div className='ui container comments'>
        <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="I like the subject"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="I like the writing"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
}

ReactDOM.render(<App/>, document.querySelector('#root'))

