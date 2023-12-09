import styles from './playground.module.css';

const TextReader = () => {
  return (
    <>

      <div className={styles.playground}>
        <div className={styles.wrapper}>
          <div className={styles.textareaWrapper}>
          
          </div>
          <div className={styles.bottomArea}>
            <form action="#" method="post" encType="multipart/form-data">
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                className={styles.customFileInput}
              />
            </form>
            <button className={styles.button}>Convert</button>

          </div>
        </div>
        <div className={styles.summarize}>
          <div className={styles.textareaWrapper}>
            <textarea
              className={styles.textarea}
              placeholder="Digitised text  appears  here"
            ></textarea>
          </div>
          <div className={styles.bottomArea}>
            <button className={styles.button}>Export</button>
            <a  href="/summarizer">
              <button className={styles.button}>Summarize</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextReader;