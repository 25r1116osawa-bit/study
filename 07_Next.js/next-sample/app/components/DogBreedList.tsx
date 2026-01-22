// クライアント処理にするため記載
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

// エンドポイント
const endpoint: string = 'https://dog.ceo/api/breeds/list/all'

interface DogAPIResponse {
    message: string
    status: string
}

export interface DogBreedListHandles {
    getSelection: () => string;
}

// 非同期通信メソッド
const getDogBreed = async () => {
    let result: DogAPIResponse
    let breeds: string[] = []
    try {
        const res = await fetch(endpoint)
        result = await res.json()
        breeds = Object.keys(result.message);
    } catch (err) {
        result = { message: '', status: 'error' }
    }
    return { json: result, breedsList: breeds }
}

const DogBreedList = ({ onSelect }: { onSelect: (value: string) => void }) => {
    const [dogBreedList, setDogBreedList] = useState<string[]>([])
    const [selectedBreed, setSelectedBreed] = useState("");

    useEffect(() => {
        getDogBreed().then((data) => setDogBreedList(data.breedsList))
    }, [])

    const handleChange = (val: string) => {
        setSelectedBreed(val);
        onSelect(val); // 親に通知
    }

    return (
        <select value={selectedBreed} onChange={(e) => handleChange(e.target.value)}>
            <option value="">選択してください</option>
            {dogBreedList.map((breed) => (
                <option key={breed} value={breed}>{breed}</option>
            ))}
        </select>
    )
}

// 親コンポーネント
const DogBreedListSelector = () => {
    const [currentBreed, setCurrentBreed] = useState(""); 

    return (
        <>
            <DogBreedList onSelect={(val) => setCurrentBreed(val)} />
            
            <div style={{ marginTop: "10px" }}>
                {currentBreed ? (
                    // 犬種が選択されている時は有効なリンクを表示
                    <Link 
                        href={`/dog/breed/${currentBreed}`}
                        style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                        『{currentBreed}』を指定
                    </Link>
                ) : (
                    // 未選択の時はクリックできないテキストを表示
                    <span style={{ color: 'gray', cursor: 'not-allowed' }}>
                        犬種を選択してください
                    </span>
                )}
            </div>
        </>
    );
}

export default DogBreedListSelector