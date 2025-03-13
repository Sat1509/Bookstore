import React, { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import { useForm } from 'react-hook-form';
import { useAddBookMutation } from '../../../redux/features/books/booksApi';
import Swal from 'sweetalert2';
import './AddBook.css';

const AddBook = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const [addBook, { isLoading, isError }] = useAddBookMutation();
  const [imageFileName, setImageFileName] = useState('');

  const onSubmit = async (data) => {
    const newBookData = {
      ...data,
      coverImage: imageFileName,
    };
    try {
      await addBook(newBookData).unwrap();
      Swal.fire({
        title: "Book added",
        text: "Your book is uploaded successfully!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3a345b",
        cancelButtonColor: "#4b1535",
        confirmButtonText: "Yes, It's Okay!"
      });
      reset();
      setImageFileName('');
      setImageFile(null);
    } catch (error) {
      console.error(error);
      alert("Failed to add book. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileName(file.name);
    }
  };

  return (
    <div className="add-book-container">
      <h2 className="add-book-title">Add New Book</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="add-book-form">
        <InputField
          label="Title"
          name="title"
          placeholder="Enter book title"
          register={register}
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Enter book description"
          type="textarea"
          register={register}
        />

        <SelectField
          label="Category"
          name="category"
          options={[
            { value: '', label: 'Choose A Category' },
            { value: 'business', label: 'Business' },
            { value: 'technology', label: 'Technology' },
            { value: 'fiction', label: 'Fiction' },
            { value: 'horror', label: 'Horror' },
            { value: 'adventure', label: 'Adventure' },
          ]}
          register={register}
        />

        <div className="trending-checkbox">
          <label className="trending-label">
            <input
              type="checkbox"
              {...register('trending')}
              className="trending-input"
            />
            <span className="trending-text">Trending</span>
          </label>
        </div>

        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          placeholder="Old Price"
          register={register}
        />

        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          placeholder="New Price"
          register={register}
        />

        <div className="cover-image-upload">
          <label className="cover-image-label">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="cover-image-input"
          />
          {imageFileName && (
            <p className="cover-image-filename">Selected: {imageFileName}</p>
          )}
        </div>

        <button type="submit" className={`submit-button ${isLoading ? "loading" : ""}`}>
          {isLoading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
