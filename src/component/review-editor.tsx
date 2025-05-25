import style from "./review-editor.module.css";

export default function ReviewEditor() {
  return (
    <section>
      <form className={style.form_container}>
        <textarea name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input name="author" placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}
