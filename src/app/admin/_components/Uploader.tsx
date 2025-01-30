'use client'

import { useState } from "react";
const CLOUDINARY_CLOUD_NAME = 'dcpnqt4db';
const CLOUDINARY_UPLOAD_PRESET = 'food-delivery';

export const Uploader = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
     
    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files && e.target.files.lenght>0){
            const file = e.target.files[0];

            const formData = new FormData();
            data.append('file', file);
            data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

            setLoading(true);
            fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: formData
            })
              .then((res=>res.json()))
                .then((data) => {
                    setImageUrl(data.secure_url);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
    };

