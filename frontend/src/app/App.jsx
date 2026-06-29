import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function App() {
  // Connected users list
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Shubham Kumar",
      role: "Host",
      isOnline: true,
      color: "from-orange-500 to-amber-500",
    },
    {
      id: 2,
      name: "Sarthak Sharma",
      role: "Editor",
      isOnline: true,
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: 3,
      name: "Harsh Singh",
      role: "Viewer",
      isOnline: false,
      color: "from-pink-500 to-rose-500",
    },
  ]);

  const [code, setCode] = useState(`// Welcome to DevSync Pro
// Powered by VS Code Monaco Editor 🚀

function connectSocket() {
  console.log("Syncing changes across users...");
}

connectSocket();`);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  console.log(setUsers);

  return (
    <div className="w-screen h-screen bg-[#0B0F19] text-[#E2E8F0] flex flex-col font-sans overflow-hidden antialiased selection:bg-indigo-500/30">
      {/* HEADERBAR */}
      <header className="w-full h-16 border-b border-slate-800/60 bg-[#0F1424]/80 backdrop-blur-md flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80 hover:opacity-100 transition-opacity cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80 hover:opacity-100 transition-opacity cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-[#10B981] opacity-80 hover:opacity-100 transition-opacity cursor-pointer"></span>
          </div>
          <div className="h-4 w-[1px] bg-slate-800 mx-1"></div>
          <h1 className="text-sm font-semibold tracking-tight text-slate-200">
            devsync{" "}
            <span className="text-indigo-400 font-normal">/ room-alpha</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            socket: connected
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs px-4 py-1.5 rounded-lg transition-colors shadow-lg shadow-indigo-600/20">
            Share Invite
          </button>
        </div>
      </header>

      {/* MAIN WORKSPACE */}
      <main className="flex-1 flex p-4 gap-4 overflow-hidden bg-gradient-to-b from-[#0F1424] to-[#0B0F19]">
        {/* LEFT PANEL: Connected Users */}
        <aside className="w-72 bg-[#0F1424]/40 border border-slate-800/80 rounded-2xl flex flex-col p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Collaborators
            </h2>
            <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
              {users.filter((u) => u.isOnline).length} online
            </span>
          </div>

          <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
            {users.map((user) => (
              <div
                key={user.id}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all border duration-200 ${
                  user.isOnline
                    ? "bg-[#131A30]/60 border-slate-800/50 hover:border-slate-700/80 hover:bg-[#17203C]"
                    : "bg-transparent border-transparent opacity-40"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${user.color} flex items-center justify-center text-white text-xs font-bold shadow-md`}
                >
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-200 truncate">
                    {user.name}
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {user.role}
                  </p>
                </div>

                {user.isOnline && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-slate-850">
            <div className="bg-[#131A30]/40 p-3 rounded-xl border border-slate-800/50 text-center">
              <p className="text-[11px] text-slate-400">AWS Workspace Active</p>
            </div>
          </div>
        </aside>

        {/* RIGHT PANEL: Real React Monaco Editor */}
        <section className="flex-1 bg-[#1e1e1e] border border-slate-800/80 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
          {/* Editor Tabs Header */}
          <div className="h-12 bg-[#181818] border-b border-slate-800 flex items-center px-4 justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-[#1e1e1e] text-slate-300 text-xs px-4 py-2 rounded-t-lg font-mono border-t-2 border-indigo-500 flex items-center gap-2">
                <span className="text-amber-400 text-[10px]">JS</span>
                main.js
              </div>
            </div>
            <div className="text-xs text-gray-500 font-mono">Monaco Engine</div>
          </div>

          {/* Real VS Code Editor Integration */}
          <div className="flex-1 w-full pt-2 bg-[#1e1e1e]">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={code}
              onChange={handleEditorChange}
              options={{
                fontSize: 14,
                minimap: { enabled: true },
                wordWrap: "on",
                lineNumbers: "on",
                automaticLayout: true,
                tabSize: 2,
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
