// app/components/Sidebar/Sidebar.tsx

const Sidebar = () => {
  return (
    <aside
      className="
        w-64
        flex flex-col
        bg-[rgba(20,30,48,0.7)]
        backdrop-blur-xl
        border-r border-white/10
        shadow-[2px_0_20px_rgba(0,0,0,0.4)]
        overflow-y-auto
      "
    >
      {/* Header */}
      <div
        className="
          px-4 py-4
          text-xl font-bold
          text-sky-200
          bg-gradient-to-br from-[#243b55] to-[#141e30]
          border-b border-white/20
          drop-shadow-[0_0_6px_rgba(102,177,255,0.8)]
        "
      >
        📘 Learn Panel
      </div>

      {/* Body */}
      <div className="p-3 space-y-6 text-white">
        {/* HTML */}
        <ul>
          <li className="font-semibold">
            HTML
            <ul className="mt-2 ml-4 space-y-1 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">
                ショートカットキー
              </li>
              <li className="hover:text-white cursor-pointer">
                基本タグ
              </li>
              <li className="hover:text-white cursor-pointer">
                グローバルナビ
              </li>
            </ul>
          </li>
        </ul>

        {/* CSS */}
        <ul>
          <li className="font-semibold">
            CSS
            <ul className="mt-2 ml-4 space-y-1 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">
                フォント
              </li>
              <li className="hover:text-white cursor-pointer">
                CSSを適用する方法
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
