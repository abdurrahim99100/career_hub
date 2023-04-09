import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4 className='text-3xl font-semibold'>(Q:1) what use to contacts API?</h4>
            <p className='text-2xl mb-6'>ans:-  The Contacts API is an API that allows you to manage contact data and sync it between different systems1. It can be used to assign categories to contacts, as well as events, messages, tasks, and group posts in a consistent way to enhance organization and discovery2. It also allows you to define a user’s master list of categories, which can open up additional creative scenarios2.</p>

            <h4 className='text-3xl font-semibold'>(Q:2) what is custom hook in react?</h4>
            <p className='text-2xl mb-6'>ans:-  Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
            
            <h4 className='text-3xl font-semibold'>(Q:3) What is useRef It is of  use?</h4>
            <p className='text-2xl mb-6'>ans:-  The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>

            <h4 className='text-3xl font-semibold'>(Q:4) what is use memo it is of use?</h4>
            <p className='text-2xl mb-6'>ans:-  React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
        </div>
    );
};

export default Blog;