interface NtProps { 
    to: string, children: React.ReactNode;
}

const Nt = ({ to, children }: NtProps) => {
    return <a href={to} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default Nt;