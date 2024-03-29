"use client";
import {Chess} from 'chess.js';
import {useEffect, useState} from 'react';
import {p0, pw, pb} from '../utils/chess-utils';
import styles from './board.module.scss';

const Board = () => {

    const [pieces, setPieces] = useState(
        new Array(8)
        .fill(0).map(() => 
            new Array(8)
            .fill('')
        ));

    useEffect(() => {
        const chess = new Chess();
        const b = chess
            .ascii()
            .split('\n')
            .slice(1, 9)
            .map((rank) => rank.slice(5, 27).split('  '));
        setPieces(b);
    }, []);

  return (
    <div className={styles.board}>
        {new Array(8).fill(0).map((_, i) => (
            <div className={styles.row} key={i}>
                {new Array(8).fill(0).map((_, j) => (
                    <div 
                        className={[
                            styles.col, 
                            (i + j) % 2 === 0 ? styles.w : styles.b 
                            ].join(' ')} 
                            key={`${i}, ${j}`}
                    >{pieces[i][j]}</div>
                ))}
            </div>
            ))}
    </div>
    );
}

export default Board;