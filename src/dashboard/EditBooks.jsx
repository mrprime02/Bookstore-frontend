import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();


  const bookCategories =[
    "Fiction", 
    "Non-Fiction",
    "Mistery",
    "Programing",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliodraphy",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory]=useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
    

  }

  //handle book submission
  const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;

      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const bookDescription = form.bookDescription.value;
      const bookPDFURL = form.bookPDFURL.value;

      const updateBookObj ={
        bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
      }

    //  console.log(bookObj)

    //update book in data
    fetch(`http://localhost:5000/book/${id}`,{
      method: 'PATCH',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data=> {
      // console.log(data);
      alert("Book is updated successfully!!!")
         
       })

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
     <div className='flex gap-8'>
       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" defaultValue={bookTitle} placeholder="Book name" required />
       </div>

       {/* authoe Name */}
       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" defaultValue={authorName} placeholder="Author Name" required />
       </div>

     </div>

     {/* secon row */}

     <div className='flex gap-8'>
       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name="imageURL" type="text" defaultValue={imageURL} placeholder="Book image URL" required />
       </div>

       {/* Catagory */}
       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>

        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }

        </Select>


        
       </div>

     </div>

     {/* bookDescription */}

     <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Write your book description..." required className='w-full' rows={6} defaultValue={bookDescription} />
      </div>

      {/* book Pdf Link */}

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" defaultValue={bookPDFURL} placeholder="book pdf url" required shadow />
      </div>

      <Button type="submit" className='mt-5'>Update Book</Button>

      
    </form>

    </div>
  )


  
}

export default EditBooks