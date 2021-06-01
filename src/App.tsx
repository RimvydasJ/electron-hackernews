import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { GlobalStyle, Container, Main, Header, MainNav, MenuItem } from './styles/GlobalStyle'
import 'regenerator-runtime/runtime'
import NewsList from './components/NewsList'
import MainWindow from './components/MainWindow'
import { menuItems } from './helper'
import Api from './infrastructure/Api'
import { HackerNewsItem, HackerNewsComment } from './models/HackerNewsItem'
import { getSavedItems, removeItem } from './infrastructure/storage'
import Comment from './components/Comment'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {

  const [currentUrl, setCurrentUrl] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [newsPosts, setNewsPosts] = useState<HackerNewsItem[] | []>([]);
  const [comments, setComments] = useState<JSX.Element[] | []>([]);
  const [isComments, setIsComments] = useState(false);

  useEffect(() => {
    fetchData(menuItems.TopHN);
  }, [])

  let fetchData = async (menuItem: string) => {
    let stories = await Api.get_stories(menuItem);
    setNewsPosts(stories);
  }

  let fetchComments = async (commentIds: number[]) => {
    let comments = await Api.get_comments(commentIds)
    setComments(buildCommentSection(comments, 0));
   
  }

  function buildCommentSection(comments: HackerNewsComment[], margin: number): JSX.Element[] {
    let elements: JSX.Element[] = []
    for (let comment of comments) {
      elements.push(<Comment comment={comment} margin={margin} key={comment.key} />)
      if (comment.childComments) {
        var childComments = buildCommentSection(comment.childComments, margin + 10);
        elements.push(...childComments);
      }
    }
    return elements;
  }

  const setMenu = (menuItem: string) => {
    setNewsPosts([]);
    fetchData(menuItem);
  }

  const loadFavorites = () => {
    const items = getSavedItems();
    setNewsPosts(items);
  }

  const setUrl = (url: string, title: string, isComments: boolean = false) => {
    setCurrentTitle(title);
    setIsWarning(false);
    setIsLoading(true);
    setCurrentUrl(url);
    setIsComments(isComments);
    if (isComments && newsPosts) {
      const post = newsPosts.find(post => post.url === url);
      if (post?.commentIds) {
        fetchComments(post.commentIds);
      }
    }
  }

  const isFrameLoaded = () => {
    setTimeout(() => {
      setIsWarning(true);
    }, 1000);
    setIsLoading(false);
  }


  const removeFavorite = (url: string) => {
    removeItem(url);
    setNewsPosts(getSavedItems());
    setCurrentUrl("");
  }

  return (
    <Container>
      <GlobalStyle />
      <Header><p>header</p></Header>
      <Main>
        <MainNav>
          <MenuItem onClick={() => setMenu(menuItems.TopHN)}>Top Stories</MenuItem>
          <MenuItem onClick={() => setMenu(menuItems.AskHN)}>Ask HN</MenuItem>
          <MenuItem onClick={() => setMenu(menuItems.ShowHN)}>Show HN</MenuItem>
          <MenuItem onClick={() => setMenu(menuItems.JobHN)}>Job HN</MenuItem>
          <MenuItem onClick={() => loadFavorites()}>Favorites</MenuItem>
        </MainNav>
        <NewsList setCurrentUrl={setUrl} newsPosts={newsPosts} />
        <MainWindow
          url={currentUrl}
          isLoading={isLoading}
          isError={isError}
          isFrameLoaded={isFrameLoaded}
          showWarning={isWarning}
          title={currentTitle}
          reload={setUrl}
          removeFavorite={removeFavorite}
          isComments={isComments}
          comments={comments}
        />
      </Main>

    </Container>
  )
}

render(<App />, mainElement)
