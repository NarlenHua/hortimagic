// EventEmitter.ts
type Listener = (...args: any[]) => void;

export class EventEmitter {
    private events: { [key: string]: Listener[] } = {};

    on(eventName: string, listener: Listener): void {
        if (!this.events[eventName]) this.events[eventName] = [];
        this.events[eventName].push(listener);
    }

    off(eventName: string, listener?: Listener): void {
        if (!this.events[eventName]) return;
        if (listener) {
            this.events[eventName] = this.events[eventName].filter(fn => fn !== listener);
        } else {
            delete this.events[eventName];
        }
    }

    once(eventName: string, listener: Listener): void {
        const onceWrapper: Listener = (...args) => {
            listener(...args);
            this.off(eventName, onceWrapper);
        };
        this.on(eventName, onceWrapper);
    }

    emit(eventName: string, ...args: any[]): boolean {
        const listeners = this.events[eventName];
        if (!listeners || listeners.length === 0) return false;
        // 使用副本防止遍历时修改
        [...listeners].forEach(fn => fn(...args));
        return true;
    }
}