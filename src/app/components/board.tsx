"use client";
import {Chess, Move} from 'chess.js';
import {useEffect, useState} from 'react';
import {p0, pw, pb, chess, getBoard} from '../utils/chess-utils';
import styles from './board.module.scss';

const Board = () => {

    const [pieces, setPieces] = useState(
        new Array(8)
        .fill(0).map(() => 
            new Array(8)
            .fill('')
        ));
    const [highlighted, setHighlighted] = useState<string[]>([]);
    useEffect(() => {
        setPieces(getBoard());
    }, []);

  return (
    <div className={styles.board}>
        {new Array(8).fill(0).map((_, i) => (
            <div className={styles.row} key={i}>
                {new Array(8).fill(0).map((_, j) => {
                        // Which piece is at this square?
                        let p = pieces[i][j];
                        let c = '';
                        if ( p == ".") {
                            p = "";
                        } else if (p.match(/[A-Z]/)) {
                            p = pw[p0.indexOf(p.toLowerCase())];
                            c = 'w';
                        } else {
                            p = pb[p0.indexOf(p)];
                            c = 'b';
                        }
                        const square = `${'abcdefgh'.charAt(j)}${8 - i}`;
                        return (
                        <div 
                            className={[
                                styles.col, 
                                (i + j) % 2 === 0 ? styles.w : styles.b,
                                    p && chess.turn() == c && styles.pointer,
                                    highlighted.includes(square) && styles.highlighted,
                                ].join(' ')} 
                                key={`${i}, ${j}`}
                                onClick={
                                   () => {
                                    // @ts-ignore
                                    const mvs = chess.moves({square, verbose: true}) as Move[];
                                    setHighlighted([...mvs.map(({to}) => to)]);
                                
                                }}
                        >{p}</div>)
                    }
                )}
            </div>
            ))}
    </div>
    );
}

export default Board;