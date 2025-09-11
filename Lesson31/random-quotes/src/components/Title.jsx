export const align = {
  center: 'center',
  left: 'left',
  right: 'right',
}


// label is props that we can pass to the Title component
export function Title({ label, align }) {

  const alignText = () => {
    switch (align) {
      case 'center':
        return 'text-center';
      case 'left':
        return 'text-start';
      case 'right':
        return 'text-end';
      default:
        console.error('No suitable setting is found for', align);
    }
  }

  return (
    <h2 className={`font-bold text-slate-600 text-xl ${alignText()}`} >
      {label} 
    </h2>
  );
}
