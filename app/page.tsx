import { useState } from 'react';

export default function MoneyMonarhGame() {
  const [xp, setXP] = useState(20);
  const [level, setLevel] = useState(2);
  const [log, setLog] = useState([]);

  const levelThresholds = [0, 10, 25, 45, 70, 100];

  const tasks = [
    { name: "1 dakika ders aç", xp: 1 },
    { name: "5 matematik sorusu çöz", xp: 3 },
    { name: "1 dakika mekik/şınav", xp: 2 },
    { name: "Gelişim defterine ✔ at", xp: 1 },
    { name: "1 dakikalık kitap/konu özeti", xp: 3 },
  ];

  const handleTask = (task) => {
    const newXP = xp + task.xp;
    let newLevel = level;

    if (newLevel < levelThresholds.length - 1 && newXP >= levelThresholds[newLevel]) {
      newLevel += 1;
    }

    setXP(newXP);
    setLevel(newLevel);
    setLog([...log, +${task.xp} XP: ${task.name}]);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>🎮 MoneyMonarh - Gelişim Oyunu</h1>
      <div style={{ border: '1px solid #ccc', padding: 10, borderRadius: 6, marginBottom: 20 }}>
        <p><strong>Karakter:</strong> MoneyMonarh</p>
        <p><strong>Level:</strong> {level}</p>
        <p><strong>XP:</strong> {xp}</p>
      </div>

      <div style={{ display: 'grid', gap: 10, marginBottom: 20 }}>
        {tasks.map((task, index) => (
          <button
            key={index}
            onClick={() => handleTask(task)}
            style={{ padding: 10, fontSize: 16, cursor: 'pointer' }}
          >
            {task.name} (+{task.xp} XP)
          </button>
        ))}
      </div>

      <div style={{ border: '1px solid #ccc', padding: 10, borderRadius: 6 }}>
        <h2>📝 Günlük Görevler Logu</h2>
        <ul>
          {log.map((entry, i) => (
            <li key={i}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
