import AppHeader from "../AppHeader"
import PostAddForm from "../PostAddForm"
import PostList from "../PostList"
import PostStatusFilter from "../PostStatusFilter"
import SearchPanel from "../SearchPanel"
import './App.css'

const App = () => {

    const data = [
        {label: "Going to learn React JS", important: true, id: "qe"},
        {label: "That is so good", important: false, id: "qa"},
        {label: "i need a beak...", important: false, id: "qz"},
    ]

    return(
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    )
}

export default App