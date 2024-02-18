"use client"
import { WebServices } from '@/services/request';
import React, { useState } from 'react'
import * as yup from "yup";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function Newsletter({text }) {
  const successNotify = () => toast.success(text.newsletter_success);
  const errorNotify = () => toast.error(text.newsletter_error);
  const validationSchema = yup.object().shape({
    email: yup.string()
      .email(text.newsletter_trust)
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const send = await WebServices.postMail(values)
      send.success ? successNotify() : errorNotify()
      resetForm();
    },
  });

  return (
    <div className='w-full flex justify-between items-center sm:items-start sm:flex-col'>
      <div className='flex flex-col'>
        <h2 className='text-4xl font-bold gap-1 sm:text-xl'>{text.newsletter_title}</h2>
        <p className='text-sm opacity-60 sm:text-xs'>{text.newsletter_subtext}</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex gap-3 relative sm:flex-col sm:mt-5'>
          <input
            className='text-black h-12 min-w-80 rounded-lg border-0'
            id="email"
            name="email"
            type="email"
            placeholder={text.newsletter_placehlder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='absolute text-xxs text-red-300 left-0 -bottom-6'>{formik.errors.email}</div>
          ) : null}
          <button className='btn-venus' type="submit">{text.newsletter_btn}</button>
        </div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </form>
    </div>
  )
}
