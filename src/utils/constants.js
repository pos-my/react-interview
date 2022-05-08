import {Pizza} from "../models/Pizza";

export const SMALL = "Small";
export const MEDIUM = "Medium";
export const LARGE = "Large";

export const PICKUP = "pickup";
export const DELIVERY = "delivery";

export const testData = [
    new Pizza("1", "Chonky Chicken", 10),
    new Pizza("2", "Beef Barbeque", 12),
    new Pizza("3", "Hawking Hawaiian", 10),
    new Pizza("4", "Margeret's Margherita", 8),
    new Pizza("5", "Vegan Villa Vista", 8),
]