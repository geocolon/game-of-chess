"use client";
import {Move} from 'chess.js';
import {useEffect, useRef, useState} from 'react';
import {p0, pw, pb, chess, getBoard} from '../utils/chess-utils';
import { calculateBestMove, initGame } from 'chess-ai';
import styles from './board.module.scss';
import Loader from './loader';


const Board = () => {

    const [pieces, setPieces] = useState(
        new Array(8).fill(0).map(() => new Array(8).fill(''))
        );
    const workerRef = useRef<Worker>();    
    const [highlighted, setHighlighted] = useState<string|undefined[]>([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        workerRef.current = new Worker(new URL('../utils/worker.ts', import.meta.url));
        workerRef.current.onmessage = (e: MessageEvent) => {
            console.log('Message from Board UI.', e);
        }
        workerRef.current.postMessage('Hello from Board UI');
        initGame(chess, 1);
        setPieces(getBoard());
        return () => {
            workerRef.current?.terminate();
        }
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
                                    if (highlighted.slice(1).includes(square)) {
                                         // @ts-ignore
                                        chess.move({to: square, from: highlighted[0]});
                                        setPieces(getBoard());
                                        setLoading(true);
                                        setTimeout(() => {
                                            const aiMove = calculateBestMove(chess, 1);
                                            if (aiMove) {
                                                const move = chess.move(aiMove);
                                            setPieces(getBoard());
                                            setHighlighted([move?.to, move?.from]);
                                            }
                                            setLoading(false);
                                        }, 0);
                                        
                                    } else if( p && chess.turn()  == c){
                                        const mvs = chess.moves({
                                            // @ts-ignore
                                            square,
                                            verbose: true,
                                        }) as Move[];
                                        setHighlighted([square, ...mvs.map(({to}) => to)]);
                                    } else {
                                        setHighlighted([]);
                                    }
                                }}
                        >
                            {p}
                        </div>)
                    }
                )}
            </div>
            ))}
        <Loader hidden={!isLoading}/>    
    </div>
    );
}

export default Board;