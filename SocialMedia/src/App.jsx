import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";
import PostListProvider from "./store/post-list-store";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
