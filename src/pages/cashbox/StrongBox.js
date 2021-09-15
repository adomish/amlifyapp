/* eslint-disable no-dupe-keys */
import { API } from "aws-amplify";
import { useEffect, useState } from "react"
import { listCashBoxes } from "../../graphql/queries";
import { createCashBox, deleteCashBox } from "../../graphql/mutations";
import styled from "styled-components";

const initialFormState = {
  name: '',
  description: '',
  depandpay: false,
  one: 0,
  five: 0,
  ten: 0,
  fifty: 0,
  handred: 0,
  fivehandred: 0,
  thousand: 0,
  fivethousand:0,
  tenthousand: 0,
}

const firstTotal = {
  one: 0,
  five: 0,
  ten: 0,
  fifty: 0,
  handred: 0,
  fivehandred: 0,
  thousand: 0,
  fivethousand: 0,
  tenthousand: 0,
}

const Table = styled.table`
  margin: auto;
`;

export default function StrongBox() {
  const kinds = [
    { name: 'one', holder: '一円玉' , value: 0}, 
    { name: 'five', holder: '五円玉' , value: 0}, 
    { name: 'ten', holder: '十円玉' , value: 0}, 
    { name: 'fifty', holder: '五十円玉' , value: 0}, 
    { name: 'handred', holder: '百円玉' , value: 0}, 
    { name: 'fivehandred', holder: '五百円玉' , value: 0}, 
    { name: 'thousand', holder: '千円札' , value: 0}, 
    { name: 'fivethousand', holder: '五千円札' , value: 0}, 
    { name: 'tenthousand', holder: '一万円札', value: 0 },
  ];

  const [boxs, setBoxs] = useState([]);

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchBox();
  }, []);



  async function fetchBox() {
    const apiData = await API.graphql({ query: listCashBoxes });
    const boxFormAPI = apiData.data.listCashBoxes.items;
    await Promise.all(boxFormAPI.map(async box => {
      return box;
    }))
    const dataList = boxFormAPI.map(items => {
      const t = items.createdAt;
      const  parts = {
        ...items,
        year: parseInt(t.substring(0, 4), 10),
        month: parseInt(t.substring(5, 7), 10),
        day: parseInt(t.substring(8, 10), 10),
        time: parseInt(t.substring(11, 13)) + 9,
      };
      return parts;
    });

    setBoxs(dataList);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value),
    })
  };

  const handleCheck = () => {
    const num = Object.values(formData).filter(item => (
      typeof(item) === 'number' && Number.isFinite(item)
    ));
    const judg = (i) => i >= 0
    console.log(num.every(judg))
    setFormData({
      ...formData,
      'depandpay': num.every(judg)
    })
  };

  async function createBox() {
    await API.graphql({ query: createCashBox, variables: { input: formData } });

    const now = new Date();
    const today = {
      year: now.getFullYear(),
      month: now.getMonth(),
      day: now.getDate(),
      time: now.getHours(),
    };

    const itemList = { ...formData, ...today }

    setBoxs([ ...boxs, itemList ]);
    setFormData(initialFormState);
  };

  async function deleteBox({ id }) {
    const newBoxArray = boxs.filter(box => box.id !== id);
    setBoxs(newBoxArray);
    await API.graphql({ query: deleteCashBox, variables: { input: { id } } });
  };

  const [total, setTotal] = useState(firstTotal);

  useEffect(() => {
    const ones = boxs.map(b => b.one);
    const tone = ones.reduce((sum, element) => sum + element, 0);
    const fives = boxs.map(b => b.five);
    const tfive = fives.reduce((sum, element) => sum + element, 0);
    const tens = boxs.map(b => b.ten);
    const tten = tens.reduce((sum, element) => sum + element, 0); 
    const fiftys = boxs.map(b => b.fifty);
    const tfifty = fiftys.reduce((sum, element) => sum + element, 0);
    const hands = boxs.map(b => b.handred);
    const thand = hands.reduce((sum, element) => sum + element, 0);
    const fhans = boxs.map(b => b.fivehandred);
    const tfhand = fhans.reduce((sum, element) => sum + element, 0);
    const thous = boxs.map(b => b.thousand);
    const tthous = thous.reduce((sum, element) => sum + element, 0);
    const fthous = boxs.map(b => b.fivethousand);
    const tfthous = fthous.reduce((sum, element) => sum + element, 0);
    const tenthous = boxs.map(b => b.tenthousand);
    const ttenthous = tenthous.reduce((sum, element) => sum + element, 0);
    const totalList = {
      one: tone,
      five: tfive,
      ten: tten,
      fifty: tfifty,
      handred: thand,
      fivehandred: tfhand,
      thousand: tthous,
      fivethousand: tfthous,
      tenthousand: ttenthous,
    }
    setTotal(totalList)
  }, [boxs]);

  console.log(total)

  return (
    <div>
      <h1>小口金操作</h1>
      <h2>
        <ul></ul>
      </h2>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value })}
        placeholder="名前"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value })}
        placeholder="使い道"
        value={formData.description}
      />
      
      {/* boolean型にする予定 */}
      <div style={{marginBottom: 30}}>
        <div>
          一円玉
          <input
            type='number'
            name='one'
            onChange={handleChange}
            value={formData.one}
          />
        </div>
        <div>
          五円玉
          <input
            type='number'
            name='five'
            onChange={handleChange}
            value={formData.five}
          /> 
        </div>
        <div>  
          十円玉
          <input
            type='number'
            name='ten'
            onChange={handleChange}
            value={formData.ten}
          /> 
        </div>
        <div>
          五十円玉
          <input
            type='number'
            name='fifty'
            onChange={handleChange}
            value={formData.fifty}
          />
        </div>
        <div>
          百円玉
          <input
            type='number'
            name='handred'
            onChange={handleChange}
            value={formData.handred}
          />
        </div>
        <div>
          五百円玉
          <input
            type='number'
            name='fivehandred'
            onChange={handleChange}
            value={formData.fivehandred}
          />
        </div>
        <div>
          千円札
          <input
            type='number'
            name='thousand'
            onChange={handleChange}
            value={formData.thousand}
          />
        </div>
        <div>
          五千円札
          <input
            type='number'
            name='fivethousand'
            onChange={handleChange}
            value={formData.fivethousand}
          />
        </div>
        <div>
          一万円札
          <input
            type='number'
            name='tenthousand'
            onChange={handleChange}
            value={formData.tenthousand}
          />      
        </div>
      </div>        
      <button onClick={handleCheck}>確認</button>
      <button onClick={createBox}>登録</button>
      <h2>現在の枚数</h2>
      <h3>
        <Table>
          <thead>
            <tr>
              {
                kinds.map(kind => (
                  <th key={kind.name}>{kind.holder}</th>
                ))
              } 
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{total.one}枚</th>
              <th>{total.five}枚</th>
              <th>{total.ten}枚</th>
              <th>{total.fifty}枚</th>
              <th>{total.handred}枚</th>
              <th>{total.fivehandred}枚</th>
              <th>{total.thousand}枚</th>
              <th>{total.fivethousand}枚</th>
              <th>{total.tenthousand}枚</th>
            </tr>
          </tbody>
        </Table>
      </h3>
      <h2>履歴</h2>
      <div>
        { 
          boxs.map((box, index) => (
            <div key={box.id || index}>
              <Table>
                <thead>
                  <tr>
                    <th>{box.year}年</th>
                    <th>{box.month}月</th>
                    <th>{box.day}日</th>
                    <th>{box.time}時</th>
                    <th/>
                    <th/>
                    <th>使用者: {box.name}</th>
                    <th>使い道: {box.description}</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    {
                      kinds.map(kind => (
                        <th key={kind.name}>{kind.holder}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{box.one} 枚</th>
                    <th>{box.five} 枚</th>
                    <th>{box.ten} 枚</th>
                    <th>{box.fifty} 枚</th>
                    <th>{box.handred} 枚</th>
                    <th>{box.fivehandred} 枚</th>
                    <th>{box.thousand} 枚</th>
                    <th>{box.fivethousand} 枚</th>
                    <th>{box.tenthousand} 枚</th>
                  </tr>
                </tbody>
              </Table>
              <button onClick={() => deleteBox(box)}>削除</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
