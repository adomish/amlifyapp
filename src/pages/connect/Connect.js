import { useEffect, useState } from 'react';

const Connect = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGetData();
    fetchPostData();
  }, []);

  const fetchGetData = async () => {
    await fetch('http://0.0.0.0:5000/', {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json())
    .then(data => console.log(data));
  };
  const fetchPostData = async () => {
    const url = 'http://0.0.0.0:5000/testPost';
    const body = JSON.stringify({message: '成功'});
    await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: body,
      headers: {'Content-Type': 'application/json'}
    })
    .then(data => {
      console.log(data);
    });
  }

  const fetchPdfData = async () => {
    const url = 'http://0.0.0.0:5000/testGet';
    await fetch(url, {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.blob)
  }

  return(
    <div>
      <a href="http://0.0.0.0:5000/testGet" download="test">
        <button type="button">押してみてね！</button>
      </a>
      <iframe title="a" src="http://0.0.0.0:5000/show_pdf" />
    </div>
  );
}

export default Connect;
