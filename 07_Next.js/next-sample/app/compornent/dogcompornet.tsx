"use client"

import { useEffect, useState } from "react";
import Image from "next/image"; // <- Next.js推奨

const endpoint = "https://dog.ceo/api/breeds/image/random";

interface DogAPIResponse {
  message: string;
  status: string;
}

const fetchDogImage = async (): Promise<DogAPIResponse> => {
  try {
    const res = await fetch(endpoint);
    const data = (await res.json()) as DogAPIResponse;
    return data;
  } catch {
    return { message: "", status: "error" }; // err を省略
  }
};

const GetDogImgs = () => {
  const [dogImage, setDogImage] = useState<string>("");

  useEffect(() => {
    fetchDogImage().then((data) => setDogImage(data.message));
  }, []);

  return (
    <div>
      {dogImage !== "" ? (
        <Image
          src={dogImage}
          alt="Random Dog"
          width={400}   // 必須: 横幅
          height={400}  // 必須: 高さ
        />
      ) : (
        <p>通信失敗または読み込み中...</p>
      )}
    </div>
  );
};

export default GetDogImgs;
