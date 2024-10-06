import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const products = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    imageUrl: require('../assets/ca_nau_lau.png')  
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LTD Food',
    imageUrl: require('../assets/ga_bo_toi.png')
  },
  {
    id: '3',
    name: 'Xe cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    imageUrl: require('../assets/xa_can_cau.png')
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
    imageUrl: require('../assets/do_choi_dang_mo_hinh.png')
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book',
    imageUrl: require('../assets/lanh_dao_gian_don.png')
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
    imageUrl: require('../assets/hieu_long_con_tre.png')
  }
];

const ProductItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.imageUrl} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>Shop {item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.topBarText}>Chat</Text>
        <TouchableOpacity>
          <Icon name="shopping-cart" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="bars" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Các style cho component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00A0FF',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  topBarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 3,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopName: {
    fontSize: 14,
    color: 'gray',
  },
  chatButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00A0FF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
