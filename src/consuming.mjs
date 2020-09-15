/* beautify preserve:start */
import setText, {appendText, showWaiting, hideWaiting } from './results.mjs';
/* beautify preserve:end */

export function get() {
    axios.get("http://localhost:3000/orders/1")
        .then(({ data }) => {
            setText(JSON.stringify(data));
        });
}

export function getCatch() {
    axios.get("http://localhost:3000/orders/123")
        .then(({ data }) => {
            setText(JSON.stringify(data));
        }).catch(e => {
            setText(e);
        })
}

export function chain() {}

export function chainCatch() {}
export function final() {}