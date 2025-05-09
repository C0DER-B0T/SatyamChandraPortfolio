import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, Frown, Meh } from 'lucide-react';

const analyzeSentiment = (text: string) => {
  if (!text.trim()) return 'neutral';
  const positiveWords = ['good', 'great', 'excellent', 'happy', 'love', 'awesome', 'fantastic', 'positive', 'enjoy'];
  const negativeWords = ['bad', 'terrible', 'sad', 'hate', 'awful', 'worst', 'negative', 'angry'];
  const lower = text.toLowerCase();
  let score = 0;
  positiveWords.forEach(word => { if (lower.includes(word)) score++; });
  negativeWords.forEach(word => { if (lower.includes(word)) score--; });
  if (score > 0) return 'positive';
  if (score < 0) return 'negative';
  return 'neutral';
};

const SentimentIcon = ({ sentiment }: { sentiment: string }) => {
  if (sentiment === 'positive') return <Smile className="w-12 h-12 text-green-500" />;
  if (sentiment === 'negative') return <Frown className="w-12 h-12 text-red-500" />;
  return <Meh className="w-12 h-12 text-yellow-500" />;
};

const AIDemo = () => {
  const [input, setInput] = useState('');
  const [sentiment, setSentiment] = useState('neutral');
  const [showResult, setShowResult] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    const result = analyzeSentiment(input);
    setSentiment(result);
    setShowResult(true);
  };

  return (
    <section id="ai-demo" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Try a Live AI Demo
        </motion.h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Enter a sentence and see instant sentiment analysis powered by AI!
        </p>
        <form onSubmit={handleAnalyze} className="flex flex-col items-center gap-4">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            rows={3}
            className="w-full max-w-lg px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            placeholder="Type something like 'I love machine learning!'"
            required
          />
          <motion.button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Analyze Sentiment
          </motion.button>
        </form>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col items-center"
          >
            <SentimentIcon sentiment={sentiment} />
            <span className={`mt-2 text-2xl font-bold ${sentiment === 'positive' ? 'text-green-500' : sentiment === 'negative' ? 'text-red-500' : 'text-yellow-500'}`}>
              {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AIDemo; 