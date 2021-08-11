import React, { useState, useMemo } from 'react';
import './App.css';
import PostForm from './components/PostForm';
// import Counter from './components/components';
// import CounterClass from './components/CounterClass';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
// import MyButton from './components/UI/button/MyButton';
// import MyInput from './components/UI/input/MyInput';

import './styles/App.css';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
		const [posts, setPosts] = useState([
			{id: 1, title: 'Javascript', body: 'Description'},
			{id: 2, title: 'React', body: 'Description'},
			{id: 3, title: 'Node.js', body: 'Description'}
		]);

		const [selectedSort, setSelectedSort] = useState('');
		const [searchQuery, setSearchQuery] = useState('');
		const [modal, setModal] = useState(false);

		const sortedPosts = useMemo(() => {
			if(selectedSort) {
				return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
			}
			return posts;
		}, [selectedSort, posts]);

		const sortedAndSearchedPosts = useMemo(() => {
			return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
		}, [searchQuery, sortedPosts]);

		const createPost = (newPost) => {
			setPosts([...posts, newPost]);
			setModal(false);
		}

		const removePost = (post) => {
			setPosts(posts.filter(p=>p.id !== post.id))
		}

		const sortPosts = (sort) => {
			setSelectedSort(sort);
		}

  return (
    <>
		<MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
			Создать пост
		</MyButton>
		<MyModal visible={modal} setVisible={setModal}>
			<PostForm create={createPost}/>
		</MyModal>
		<hr style={{margin: "15px 0"}}/>
		<div>
			<MyInput
				placeholder='Поиск...'
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
			/>
			<MySelect
				value={selectedSort}
				onChange={sortPosts}
				defaultValue="Сортировка по:"
				options={[
					{value: 'title', name: 'По названию'},
					{value: 'body', name: 'По описанию'}
				]}
			/>
		</div>
		{sortedAndSearchedPosts.length
			? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Первый список постов'/>
			: <h2 style={{textAlign: 'center'}}>Посты не найдены!</h2>
		}
    </>
  );
}

export default App;
