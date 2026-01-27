import { Inter } from "next/font/google";
import Sidebar from "@/app/components/Sidebar/sidebar";
import Content from "@/app/components/content/Content";

const inter = Inter({ subsets: ["latin"] });
const Home = () => {

    


    return (
     
     <div className="container">
      <Sidebar />
      <Content />
    </div>
      
    )
}
// Homeはlayout.tsxのchildrenに渡される。
export default Home;

