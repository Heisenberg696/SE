import styles from './playground.module.css';

const SummarizerTwo = () => {
  return (
    <>
      <div className={styles.playground}>
        <div className={styles.wrapper}>
          <div className={styles.textareaWrapper}>
            <textarea
              className={styles.textarea}
              placeholder="Enter text here"
            ></textarea>
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
            <button className={styles.button}>Summarize</button>

          </div>
        </div>
        <div className={styles.summarize}>
          <div className={styles.textareaWrapper}>
            <textarea
              className={styles.textarea}
              placeholder="Summarised  text  here"
            ></textarea>
          </div>
          <div className={styles.bottomArea}>
            <button className={styles.button}>Export</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummarizerTwo;