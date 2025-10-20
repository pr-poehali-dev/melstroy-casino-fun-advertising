import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [balance, setBalance] = useState(10000);
  const [totalWins, setTotalWins] = useState(42);
  const [level, setLevel] = useState(7);

  const games = [
    { id: 1, name: 'Мега Слоты 🎰', emoji: '🎰', multiplier: 'x2.5', color: 'from-purple-500 to-pink-500' },
    { id: 2, name: 'Рулетка Фортуны', emoji: '🎡', multiplier: 'x10', color: 'from-pink-500 to-orange-500' },
    { id: 3, name: 'Карты Удачи', emoji: '🃏', multiplier: 'x5', color: 'from-orange-500 to-yellow-500' },
    { id: 4, name: 'Кубики Хаоса', emoji: '🎲', multiplier: 'x3', color: 'from-blue-500 to-purple-500' },
  ];

  const memes = [
    { id: 1, text: 'Когда поставил всё на красное', emoji: '😱', likes: 1337 },
    { id: 2, text: 'Я после х10', emoji: '🤑', likes: 999 },
    { id: 3, text: 'Мелстрой одобряет', emoji: '👑', likes: 2500 },
    { id: 4, text: 'Последние 100 рублей', emoji: '😭', likes: 666 },
  ];

  const leaderboard = [
    { rank: 1, name: 'МЕЛСТРОЙ', wins: 999999, emoji: '👑' },
    { rank: 2, name: 'ПрофиГеймер', wins: 50000, emoji: '🔥' },
    { rank: 3, name: 'УдачаНаМаксе', wins: 35000, emoji: '⭐' },
    { rank: 4, name: 'КазиноКинг', wins: 28000, emoji: '💎' },
    { rank: 5, name: 'Вы', wins: totalWins, emoji: '🎯' },
  ];

  const playGame = (gameName: string) => {
    const win = Math.random() > 0.5;
    if (win) {
      const winAmount = Math.floor(Math.random() * 1000) + 500;
      setBalance(prev => prev + winAmount);
      setTotalWins(prev => prev + 1);
    } else {
      const loseAmount = Math.floor(Math.random() * 500) + 100;
      setBalance(prev => Math.max(0, prev - loseAmount));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-4 animate-glow">
            КАЗИНО МЕЛСТРОЯ 🎰
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-bold">
            Где мемы встречаются с удачей! 🔥
          </p>
        </header>

        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-purple-950/50 p-2">
            <TabsTrigger value="games" className="text-lg font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">
              🎮 Игры
            </TabsTrigger>
            <TabsTrigger value="tournaments" className="text-lg font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">
              🏆 Турниры
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-lg font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">
              👤 Профиль
            </TabsTrigger>
          </TabsList>

          <TabsContent value="games" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {games.map((game) => (
                <Card 
                  key={game.id} 
                  className={`bg-gradient-to-br ${game.color} border-4 border-white/20 hover-scale cursor-pointer overflow-hidden`}
                  onClick={() => playGame(game.name)}
                >
                  <CardHeader className="text-center">
                    <div className="text-7xl mb-4 animate-pulse-slow">{game.emoji}</div>
                    <CardTitle className="text-3xl font-black text-white drop-shadow-lg">
                      {game.name}
                    </CardTitle>
                    <Badge className="text-2xl font-black px-6 py-2 bg-yellow-400 text-purple-900 border-2 border-white">
                      {game.multiplier}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full text-xl font-black py-6 bg-white text-purple-900 hover:bg-yellow-400 transition-all">
                      ИГРАТЬ 🚀
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-purple-950/70 border-4 border-pink-500/50">
              <CardHeader>
                <CardTitle className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                  😂 МЕМЫ ДНЯ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {memes.map((meme) => (
                    <div 
                      key={meme.id}
                      className="bg-gradient-to-br from-purple-700 to-pink-700 p-6 rounded-xl border-2 border-white/20 hover-scale cursor-pointer"
                    >
                      <div className="text-5xl mb-3 text-center">{meme.emoji}</div>
                      <p className="text-white font-bold text-center mb-3">{meme.text}</p>
                      <div className="flex items-center justify-center gap-2 text-pink-300">
                        <Icon name="Heart" size={20} className="fill-current" />
                        <span className="font-bold">{meme.likes}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tournaments">
            <Card className="bg-purple-950/70 border-4 border-yellow-500/50">
              <CardHeader>
                <CardTitle className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center gap-3">
                  <span>🏆</span> ТУРНИРНАЯ ТАБЛИЦА
                </CardTitle>
                <CardDescription className="text-lg text-white/80">
                  Топ игроков недели
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((player) => (
                    <div 
                      key={player.rank}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 ${
                        player.rank === 1 
                          ? 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border-yellow-400' 
                          : player.rank === 5
                          ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-pink-400'
                          : 'bg-purple-800/30 border-white/20'
                      } hover-scale`}
                    >
                      <div className="text-3xl font-black text-yellow-400 w-12">
                        #{player.rank}
                      </div>
                      <div className="text-4xl">{player.emoji}</div>
                      <div className="flex-1">
                        <p className="font-black text-white text-xl">{player.name}</p>
                        <p className="text-pink-300 font-bold">Побед: {player.wins.toLocaleString()}</p>
                      </div>
                      {player.rank <= 3 && (
                        <Badge className="text-2xl px-4 py-2 bg-yellow-400 text-purple-900 font-black">
                          {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : '🥉'}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-900 to-pink-900 border-4 border-purple-500/50">
                <CardHeader className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-yellow-400">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-5xl bg-gradient-to-br from-purple-500 to-pink-500">
                      🎰
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-3xl font-black text-white">Игрок #{level * 100}</CardTitle>
                  <CardDescription className="text-xl font-bold text-pink-300">
                    Уровень {level} ⭐
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center space-y-2">
                    <p className="text-white/80 font-bold">Прогресс до уровня {level + 1}</p>
                    <Progress value={65} className="h-4" />
                    <p className="text-sm text-pink-300 font-bold">65% (650/1000 XP)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-4 border-blue-500/50">
                <CardHeader>
                  <CardTitle className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    💰 СТАТИСТИКА
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-xl border-2 border-white/20 text-center">
                    <p className="text-white/90 font-bold mb-2">Баланс</p>
                    <p className="text-5xl font-black text-white">{balance.toLocaleString()} ₽</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-800/50 p-4 rounded-xl border-2 border-purple-400/30 text-center">
                      <p className="text-white/80 font-bold mb-1">Побед</p>
                      <p className="text-3xl font-black text-yellow-400">{totalWins}</p>
                    </div>
                    <div className="bg-pink-800/50 p-4 rounded-xl border-2 border-pink-400/30 text-center">
                      <p className="text-white/80 font-bold mb-1">Ставок</p>
                      <p className="text-3xl font-black text-pink-300">156</p>
                    </div>
                  </div>

                  <div className="bg-orange-800/50 p-4 rounded-xl border-2 border-orange-400/30 text-center">
                    <p className="text-white/80 font-bold mb-1">Лучший выигрыш</p>
                    <p className="text-3xl font-black text-orange-300">25,000 ₽ 🔥</p>
                  </div>

                  <Button className="w-full text-xl font-black py-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                    💎 ПОПОЛНИТЬ БАЛАНС
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
