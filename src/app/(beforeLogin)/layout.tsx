type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className="flex flex-row">
      {children}
      {modal}
    </div>
  );
}

// 주소가 z.com (localhost:3000) 일때는 children -> page.tsx, modal -> @modal/default.tsx
// 주소가 localhost:3000/i/flow/login 때는 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
