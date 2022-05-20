import { memo } from "react";
import styles from './style.module.css'

type verifyType = {
  hendleVerify: (s:string)=> void
}

export const PostItem = ({ title, body, verify,hendleVerify,id }: any & verifyType) => {
  // console.log(id)
  console.log("Post item Rendering")

  const handleclick =()=>{
    console.log(id)
    hendleVerify(id);
  }
  return (
    <div className={styles.mainchild}>
      <div className={styles.child}>
        {/* 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'; */}
        <div style={{backgroundColor: verify ? "rgb(656,876,099)" : "red"}}></div>
        <div>
          <h3>{title}</h3>
          <p>{body}</p>
          <p>{verify ? "verified" : "not verified"}</p>
        </div>
      </div>

      <button className={styles.addbtn} onClick = {handleclick}>Verify</button>
    </div>
  );
};


export const MemoPostitem = memo(PostItem)