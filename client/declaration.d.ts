declare module '*.scss';

declare namespace JSX {
    interface IntrinsicElements {
        component: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
}