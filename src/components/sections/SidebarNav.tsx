interface SidebarNavProps {
  title: string;
  items: { label: string; href: string }[];
  currentPath: string;
}

export default function SidebarNav({ title, items, currentPath }: SidebarNavProps) {
  return (
    <div>
      <div style={{ background: "#1A3C6B", padding: "14px 20px" }}>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>{title}</span>
      </div>
      {items.map((item, i) => {
        const isActive = currentPath === item.href;
        return (
          <a
            key={`${item.href}-${i}`}
            href={item.href}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 20px",
              textDecoration: "none",
              fontSize: "0.875rem",
              borderBottom: "1px solid #F7FAFC",
              background: isActive ? "#EEF3FA" : "#fff",
              color: isActive ? "#1A3C6B" : "#2D3748",
              fontWeight: isActive ? 600 : 400,
              borderLeft: isActive ? "3px solid #1A3C6B" : "3px solid transparent",
            }}
          >
            <span>{item.label}</span>
            <span style={{ color: "#CBD5E0" }}>›</span>
          </a>
        );
      })}
    </div>
  );
}
