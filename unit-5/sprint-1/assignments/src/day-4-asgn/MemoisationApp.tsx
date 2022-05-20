import { useCallback, useState } from "react";
import { Timer,MemoisedTimer } from "./Timer";
import styles from "./style.module.css";
import { v4 as uuid } from "uuid";
import { PostItem,MemoPostitem } from "./PostItem";

type timer = {
  time: number;
};

type post = {
  id: string;
  title: string;
  body: string;
  verify: boolean;
};

export const MemoisationApp = () => {
  const [time, settime] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [list, setlist] = useState<post[]>([]);

  const hendleVerify = (id:string)=>{
    setlist(list.map((elem)=>(elem.id===id ? {...elem, verify:!elem.verify}:elem)))
  }

  const callback = useCallback(hendleVerify,[list]);

  const handlePost = () => {
    // console.log(title);
    // console.log(body);
    setlist([...list, { id: uuid(), title, body, verify: false }]);
    console.log(list);
  };

  return (
    <div className={styles.inpdiv}>
      <MemoisedTimer time={time} settime={settime} />

      <div>
        <input
          className={styles.title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <textarea
          className={styles.body}
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button className={styles.addbtn} onClick={handlePost}>
          POST
        </button>
      </div>

      <div>
        {list.map((item) => (
          <MemoPostitem key={item.id} {...item} hendleVerify={callback} />
        ))}
      </div>
    </div>
  );
};
function elem(elem: any): import("react").SetStateAction<post[]> {
  throw new Error("Function not implemented.");
}

