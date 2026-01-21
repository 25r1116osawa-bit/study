// app/user/[id]/page.tsx

type Props = {
  params: Promise<{ id: string }>; // Next.js 15以降、paramsはPromiseとして扱います
};

export default async function UserPage({ params }: Props) {
  // 非同期でparamsを解析（15.x/16.x系の書き方）
  const { id } = await params;
  
  return (
    <div style={{ padding: "20px" }}>
      <h1>ユーザー詳細ページ</h1>
      <p style={{ fontSize: "20px" }}>
        現在のURLパラメータ（ID）は: <strong>{id}</strong> です
      </p>
    </div>
  );
}