import styles from './board.module.scss';

const Board = () => {
  return (
    <div className={styles.board}>
        {new Array(8) .fill(null).map((_, i) => (
            <div className={styles.row} key={i}>
                {new Array(8).fill(null).map((_, j) => (
                    <div className={[
                        styles.col, 
                        (i + j)%2 == 0 ? styles.w : styles.b 
                        ].join(' ')} 
                        key={`${i},${j}`}
                        ></div>
                ))}
            </div>
            ))}
    </div>
    );
}

export default Board;