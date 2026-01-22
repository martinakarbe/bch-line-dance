"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, FileText, Video, Users2, Music, SearchX } from "lucide-react";
import { dances, Dance } from "@/lib/dances";

const levels = ["Alle", "Beginner", "Improver", "Intermediate", "Advanced"];

function getLevelStyle(level: Dance["level"]) {
  switch (level) {
    case "Beginner":
      return { bg: "bg-[#15803d]", text: "text-white", dot: "bg-[#15803d]" };
    case "Improver":
      return { bg: "bg-[#1e40af]", text: "text-white", dot: "bg-[#1e40af]" };
    case "Intermediate":
      return { bg: "bg-[#b45309]", text: "text-white", dot: "bg-[#b45309]" };
    case "Advanced":
      return { bg: "bg-[#dc2626]", text: "text-white", dot: "bg-[#dc2626]" };
    default:
      return { bg: "bg-[#78350f]", text: "text-white", dot: "bg-[#78350f]" };
  }
}

export function DanceTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Alle");
  const [showPairDancesOnly, setShowPairDancesOnly] = useState(false);

  const filteredDances = useMemo(() => {
    return dances.filter((dance) => {
      const matchesSearch =
        dance.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dance.songs.some((song) =>
          song.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesLevel =
        selectedLevel === "Alle" || dance.level === selectedLevel;

      const matchesPairDance = !showPairDancesOnly || dance.isPairDance;

      return matchesSearch && matchesLevel && matchesPairDance;
    });
  }, [searchQuery, selectedLevel, showPairDancesOnly]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-[#fff9f2] rounded-xl p-4 border-3 border-[#d4a574]">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#92400e]" />
            <Input
              type="search"
              placeholder="Tanz oder Lied suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 bg-white border-2 border-[#d4a574] focus:border-[#b45309] text-[#3d2314] placeholder:text-[#92400e]/60 h-12 rounded-lg"
            />
          </div>

          {/* Level filters */}
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                onClick={() => setSelectedLevel(level)}
                className={
                  selectedLevel === level
                    ? "bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] border-2 border-[#78350f]"
                    : "bg-white border-2 border-[#d4a574] text-[#78350f] hover:bg-[#faebd7] hover:border-[#b45309]"
                }
              >
                {level}
              </Button>
            ))}
          </div>

          {/* Pair dance toggle */}
          <Button
            variant={showPairDancesOnly ? "default" : "outline"}
            onClick={() => setShowPairDancesOnly(!showPairDancesOnly)}
            className={
              showPairDancesOnly
                ? "bg-[#b45309] hover:bg-[#92400e] text-[#fef3c7] border-2 border-[#78350f]"
                : "bg-white border-2 border-[#d4a574] text-[#78350f] hover:bg-[#faebd7] hover:border-[#b45309]"
            }
          >
            <Users2 className="w-4 h-4 mr-2" />
            Paartänze
          </Button>
        </div>

        {/* Results count */}
        <div className="mt-4 flex items-center gap-2 text-sm text-[#78350f]">
          <Music className="w-5 h-5 text-[#b45309]" />
          <span>
            <strong>{filteredDances.length}</strong> von {dances.length} Tänzen
          </span>
        </div>
      </div>

      {/* Dance Cards Grid */}
      {filteredDances.length === 0 ? (
        <div className="text-center py-12 bg-[#fff9f2] rounded-xl border-2 border-dashed border-[#d4a574]">
          <div className="w-16 h-16 bg-[#f5e6d3] rounded-full flex items-center justify-center mx-auto mb-4">
            <SearchX className="w-8 h-8 text-[#92400e]" />
          </div>
          <p className="text-[#78350f] text-lg">Keine Tänze gefunden.</p>
          <p className="text-[#92400e] text-sm mt-1">
            Probier andere Suchbegriffe!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDances.map((dance) => {
            const levelStyle = getLevelStyle(dance.level);
            return (
              <div
                key={dance.id}
                className="bg-[#fff9f2] rounded-xl border-3 border-[#d4a574] overflow-hidden hover:border-[#b45309] hover:shadow-lg transition-all group"
              >
                {/* Header */}
                <div className="bg-[#f5e6d3] px-4 py-3 border-b-2 border-[#d4a574] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {dance.isPairDance && (
                      <Users2 className="w-5 h-5 text-[#b45309]" />
                    )}
                    <h3 className="font-serif text-lg text-[#3d2314] group-hover:text-[#b45309] transition-colors">
                      {dance.name}
                    </h3>
                  </div>
                  <span
                    className={`${levelStyle.bg} ${levelStyle.text} text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {dance.level}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-3">
                    <p className="text-xs text-[#92400e] uppercase tracking-wide mb-1 font-semibold">
                      Musik
                    </p>
                    <div className="text-[#78350f] text-sm space-y-0.5">
                      {dance.songs.map((song, index) => (
                        <p key={index}>{song}</p>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-3 border-t border-dashed border-[#d4a574]">
                    {dance.videoLink && dance.videoLink.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {dance.videoLink.map((link, index) => {
                          const hasMultipleVideos =
                            dance.videoLink && dance.videoLink.length > 1;
                          return (
                            <a
                              key={link + index}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 bg-[#dc2626] text-white text-sm px-3 py-1.5 rounded-full hover:bg-[#b91c1c] transition-colors"
                            >
                              <Video className="h-3.5 w-3.5" />
                              {hasMultipleVideos
                                ? `Video ${index + 1}`
                                : "Video"}
                            </a>
                          );
                        })}
                      </div>
                    )}
                    {dance.stepsheetLink && (
                      <a
                        href={dance.stepsheetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-[#1e40af] text-white text-sm px-3 py-1.5 rounded-full hover:bg-[#1e3a8a] transition-colors"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        Stepsheet
                      </a>
                    )}
                    {!dance.videoLink && !dance.stepsheetLink && (
                      <span className="text-[#92400e] text-sm italic">
                        Keine Links verfügbar
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
