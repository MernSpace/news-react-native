import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

export default function GameSection() {
    return (
        <ScrollView
            vartical
            showsHorizontalScrollIndicator={false}
        >
            <LinearGradient
                colors={["#facc15", "#fb923c"]} // from yellow-400 to orange-400
                className="flex-1"
            >
                <View className="flex-1 p-4">
                    {/* Top Row */}
                    <View className="flex-row justify-between">
                        <Icon name="apple" size={30} color="#fff" />
                        <Icon name="android" size={30} color="#fff" />
                    </View>

                    {/* Info Section */}
                    <View>
                        <Text className="text-2xl font-bold mt-4 text-yellow-50">Browse More Games</Text>
                    </View>

                    {/* Scrollable Games */}
                    <View className="mt-1">
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            className="flex-row"
                        >
                            {["Game 1", "Game 2", "Game 3", "Game 4", "Game 5", "Game 6"].map(
                                (game) => (
                                    <View
                                        key={game}
                                        className="bg-green-400 rounded-lg p-2 m-1 "
                                    >
                                        <Text className="text-center font-semibold text-white">
                                            {game}
                                        </Text>
                                    </View>
                                )
                            )}
                        </ScrollView>
                    </View>
                    <View>
                        <Text className="text-2xl font-semibold text-yellow-50 mt-3 ">
                            Featured Game
                        </Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            className="flex-row"
                        >
                            <View className="flex-row justify-between items-center rounded-lg mt-3 gap-5">
                                <Image source={require('../assets/bbc.jpg')} className="w-80 h-60 rounded-lg" />
                                <Image source={require('../assets/jago.jpg')} className="w-80 h-60 rounded-lg" />
                                <Image source={require('../assets/noya.png')} className="w-80 h-60 rounded-lg" />

                                <Image source={require('../assets/bbc.jpg')} className="w-80 h-60 rounded-lg" />
                                <Image source={require('../assets/jago.jpg')} className="w-80 h-60 rounded-lg" />
                                <Image source={require('../assets/noya.png')} className="w-80 h-60 rounded-lg" />
                            </View>
                        </ScrollView>
                    </View>
                    <View className="">
                        <View className="flex-row justify-between items-center rounded-lg mt-3 gap-5">
                            <Text className="text-2xl font-semibold text-yellow-50 mt-3 ">
                                Top Games
                            </Text>
                            <Icon name="gamepad" size={30} color="#fff" />
                        </View>
                        <ScrollView
                            vartical
                            showsHorizontalScrollIndicator={false}
                            className="flex-row  "
                        >

                            {
                                Array.from({ length: 10 }).map((_, index) => (
                                    <View className="  flex-row justify-between items-center rounded-lg mt-3 bg-orange-500 p-3 ">
                                        {/* Game Thumbnail */}
                                        <Image
                                            source={require("../assets/bbc.jpg")}
                                            className="w-20 h-20 rounded-lg"
                                        />

                                        {/* Game Info */}
                                        <View className="flex-1 px-3 gap-1">
                                            <Text className="text-2xl font-semibold text-yellow-50">Top Games</Text>
                                            <View className="flex-row gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Icon key={i} name="star" size={20} color="#fff" />
                                                ))}
                                            </View>
                                        </View>

                                        {/* Download Icon */}
                                        <View className="items-end justify-end">
                                            <Icon name="download" size={30} color="#fff" />
                                        </View>
                                    </View>
                                ))
                            }



                        </ScrollView>
                    </View>
                </View>
            </LinearGradient>

        </ScrollView>
    );
}
