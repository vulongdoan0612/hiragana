import { motion } from 'framer-motion';
import { Volume2, Eye, Lightbulb, Zap, Trash2, Sparkles, Moon } from 'lucide-react';
import { useSettingsStore } from '../store/useSettingsStore';
import { useProgressStore } from '../store/useProgressStore';
import Button from '../components/ui/Button';

function Toggle({ value, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
        value ? 'bg-violet-500' : 'bg-white/20'
      }`}
    >
      <motion.div
        animate={{ x: value ? 24 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
      />
    </button>
  );
}

function SettingRow({ icon: Icon, label, desc, value, onChange }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
          <Icon size={16} className="text-white/70" />
        </div>
        <div>
          <div className="text-sm font-medium text-white">{label}</div>
          {desc && <div className="text-xs text-white/40">{desc}</div>}
        </div>
      </div>
      <Toggle value={value} onChange={onChange} />
    </div>
  );
}

export default function Settings() {
  const settings = useSettingsStore();
  const { learnedCards } = useProgressStore();
  const reset = useProgressStore.persist?.clearStorage;

  const handleReset = () => {
    if (confirm('Xóa toàn bộ tiến độ? Không thể hoàn tác!')) {
      localStorage.removeItem('hiragana-progress');
      window.location.reload();
    }
  };

  return (
    <div className="py-6 flex flex-col gap-5">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-white">⚙️ Cài Đặt</h1>
      </motion.div>

      {/* Audio & Display */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <h3 className="text-xs text-white/40 uppercase tracking-wider mb-2">Âm thanh & Hiển thị</h3>
        <SettingRow
          icon={Volume2} label="Tự động phát âm" desc="Phát âm thanh khi lật thẻ"
          value={settings.autoPlayAudio} onChange={() => settings.toggle('autoPlayAudio')}
        />
        <SettingRow
          icon={Volume2} label="Âm hiệu ứng" desc="Tiếng khi đúng/sai"
          value={settings.cardFlipSound} onChange={() => settings.toggle('cardFlipSound')}
        />
        <SettingRow
          icon={Eye} label="Hiện Romaji" desc="Luôn hiện phiên âm Latin"
          value={settings.showRomaji} onChange={() => settings.toggle('showRomaji')}
        />
        <SettingRow
          icon={Lightbulb} label="Hiện Mnemonic" desc="Hiện gợi ý ghi nhớ"
          value={settings.showMnemonic} onChange={() => settings.toggle('showMnemonic')}
        />
        <SettingRow
          icon={Sparkles} label="Confetti" desc="Hiệu ứng pháo hoa khi đúng"
          value={settings.confettiEnabled} onChange={() => settings.toggle('confettiEnabled')}
        />
      </div>

      {/* About */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <h3 className="text-xs text-white/40 uppercase tracking-wider mb-3">Thông tin</h3>
        <div className="space-y-2 text-sm text-white/60">
          <div className="flex justify-between">
            <span>Phiên bản</span><span className="text-white">1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span>Tổng ký tự</span><span className="text-white">{Object.keys(learnedCards).length} đã học</span>
          </div>
          <div className="flex justify-between">
            <span>Tech stack</span><span className="text-white">React + Tailwind + Framer</span>
          </div>
        </div>
      </div>

      {/* Danger zone */}
      <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4">
        <h3 className="text-xs text-rose-400 uppercase tracking-wider mb-3">Vùng nguy hiểm</h3>
        <Button variant="danger" className="w-full" onClick={handleReset}>
          <Trash2 size={16} className="inline mr-2" />
          Xóa toàn bộ tiến độ
        </Button>
        <p className="text-rose-400/60 text-xs mt-2 text-center">Hành động này không thể hoàn tác</p>
      </div>
    </div>
  );
}
