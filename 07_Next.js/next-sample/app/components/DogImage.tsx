"use client";
import { useEffect, useState } from "react";


const GetDogImgs = () => {

  // selectbox用
  const [breed, setBreed] = useState("affenpinscher");

  // URLが変更した際のstateを管理
  const [imageUrl, setImageUrl] = useState("");

  // selectbox用の配列
  const dogBreeds = ["affenpinscher", "airedale"];

  // selectboxが発火した際に、valueを取得する
  const changeSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBreed(e.target.value);
  };

  // promisを受け取る関数
  const fetchDogData = async () => {
    // 画像入りの封筒が届いたイメージ await fetchで通信が完了するまで待機
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);

    // bodyの中身をjsonとして解析が終わるまで、待機
    const data = await response.json();
    // 解析が終わると{ message: "url...", status: "success" }というオブジェクトが入る。
    return data;
  }
  // fetchDogDataの中身:
  // {
  //   message: "https://images.dog.ceo/breeds/pekinese/n02086079_5522.jpg",
  //   status: "success"
  // }

  // 初回表示時（初期値""） と breed が変更されたときに発火
  useEffect(() => {
    const load = async () => {
      const dog = await fetchDogData();
      setImageUrl(dog.message);
    };
    load();
  }, [breed]);


  return (
    <>
      <div>
        <select onChange={changeSelectBox}>
          <option value="affenpinscher">{dogBreeds[0]}</option>
          <option value="airedale">{dogBreeds[1]}</option>
        </select>
        {/* imageUrl True or Falseで三項演算子*/}
        {imageUrl ? (
          <img src={imageUrl} alt="dog" width={300} />
        ) : (
          <p>読み込み中...</p>
        )}
      </div>
    </>
  );
};

export default GetDogImgs;