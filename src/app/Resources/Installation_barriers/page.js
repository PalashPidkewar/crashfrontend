"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axiosInstance from "../../Auth/AxiosInstance";

const InstallCrushBarriersPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPhotos = async () => {
        try {
            const res = await axiosInstance.get("/api/photos/show");
            setPhotos(res.data);
        } catch (err) {
            console.error("Failed to fetch photos:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64 text-gray-500">
                Loading photos...
            </div>
        );
    }

    if (!photos.length) {
        return (
            <div className="flex justify-center items-center h-64 text-gray-500">
                No photos available.
            </div>
        );
    }

    return (
        <>
            {/* Logo Header Bar */}
            <div className="w-full h-[70px] flex justify-center items-center bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-md">
                <div className="relative w-[380px] h-[380px]">
                    <Image
                        src="/Logo_IMG/image.png"
                        alt="Company Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-12 bg-white">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                    >
                        <div className="relative w-full h-48">
                            <img
                                src={photo.photoUrl}
                                alt={photo.title || "Photo"}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-gray-700">
                                {photo.title || "Untitled"}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default InstallCrushBarriersPhotos;
