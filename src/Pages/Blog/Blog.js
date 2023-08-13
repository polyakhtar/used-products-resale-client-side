import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto lg:px-2 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 font-Space'>
            <div className=' text-center border-2 rounded-md p-4 bg-blue-50' style={{height:'250px'}}>
                <h1 className='text-xl'>Q-1.What are the different ways to manage a state in a React application?</h1>
                <p><b>Ans:</b>When we talk about state in our applications, it's important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:1|Local state
                2|Global state
                3|Server state
                4|URL state</p>
            </div>
            <div className=' text-center border-2 rounded-md p-4 bg-blue-50' style={{height:'250px'}}>
                <h1 className='text-xl'>Q-2.How does prototypical inheritance work?</h1>
                <p><b>Ans:</b>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className=' text-center border-2 rounded-md p-4 bg-blue-50' style={{height:'250px'}}>
                <h1 className='text-xl'>Q-3.What is a unit test? Why should we write unit tests?</h1>
                <p><b>Ans:</b>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className=' text-center border-2 rounded-md p-4 bg-blue-50' style={{height:'250px'}}>
                <h1 className='text-xl'>Q-4.React vs. Angular vs. Vue?</h1>
                <p><b>Ans:</b>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );
};

export default Blog;