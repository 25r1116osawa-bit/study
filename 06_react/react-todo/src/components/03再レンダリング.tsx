// テーマ再レンダリングと副作用を知る(useeffect)
// 再レンダリングを制するものがRcact開発を制覇する。

import { useState } from "react";


const Effect = () => {
  console.log("--APP--");

  const [isShowFace, setIsShowFace] = useState(true);

  // どのような動きになっているか？
  // onClickToggleがクリックされた時に、差分を検知し、
  // Effect関数が上から評価されて実行し、onClickToggleが実行されて、描写される
  // そのため、上に書いているconsole.logも実行されるという流れになる。
  const onClickToggle = () => {
    setIsShowFace(!isShowFace)
  }
  
  
  
  
  return (
    <div>
      <button onClick={onClickToggle}>onf/off</button>
      {isShowFace && <p>Σ੧(❛□❛✿)</p>}
    </div>
  )
}

export default Effect
