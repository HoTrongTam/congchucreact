import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SectionList, Alert, Image } from 'react-native';
import Header from '../../components/header/header';
export default class DanhBaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'A',
          data: [
            { key: 1, name: 'Nguyễn Trọng Giáp', image: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
            { key: 2, name: 'Thịnh Mặt Nồi', image: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
            { key: 3, name: 'Nguyễn Thị Long Lanh Lóng Lánh Giọt Sương Mai', image: 'https://bootdey.com/img/Content/avatar/avatar7.png' },
          ]
        },
        {
          title: 'B',
          data: [
            { key: 1, name: 'Hồ Văn User', image: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
            { key: 2, name: 'Nguyễn Văn B', image: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
          ]
        },
        {
          title: 'C',
          data: [
            { key: 1, name: 'Nguyễn Văn C', image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
            { key: 2, name: 'Nguyễn Văn C', image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
            { key: 3, name: 'Nguyễn Văn C', image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
            { key: 4, name: 'Nguyễn Văn C', image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
            { key: 5, name: 'Nguyễn Văn C', image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
            { key: 6, name: 'Nguyễn Văn C', image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
            { key: 7, name: 'Nguyễn Văn C', image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
          ]
        },
        {
          title: 'D',
          data: [
            { key: 1, name: 'Nguyễn Thị D', image: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
          ]
        },
      ]
    }
  }
  GetSectionListItem = (item) => {
    this.props.push({screen: 'ChiTietDanhBa'});
    // Alert.alert('Hello ' + item.name);
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.row1}>
          <Image style={styles.img1} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
          <View style={styles.row2}>
            <Text style={styles.lbl1}>Hồ Trọng Tâm</Text>
            <Text style={styles.lbl2}>Nhân viên</Text>
          </View>
        </View>
        <SectionList
          stickySectionHeadersEnabled
          sections={this.state.data}
          renderSectionHeader={({ section }) => {
            return (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionHeader}>
                  {section.title}
                </Text>
              </View>
            )
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.sectionContainer1}>
                <TouchableOpacity>
                  <Image style={styles.sectionImage} source={{ uri: item.image }}/>
                </TouchableOpacity>
                <View style={styles.sectionContent}>
                  <TouchableOpacity style={styles.sectionListItemS} onPress={this.GetSectionListItem.bind(this, item)}>
                    <Text style={styles.name}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }} />
      </View>
    )

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    shadowOpacity: 0.5,
  },
  sectionHeader: {
    backgroundColor: '#4267b2',
    fontSize: 17,
    padding: 5,
    color: '#fff',
    fontWeight: 'bold'
  },
  sectionListItemS: {
    fontSize: 15,
    padding: 6,
    color: '#000',
    marginLeft: 10,
    backgroundColor: '#fff'
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
    marginBottom: 13,
  },
  img1: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 5
  },
  row2: {
    marginLeft: 10,
  },
  lbl1: {
    fontSize: 17,
    color: '#000',
  },
  lbl2: {
    fontSize: 14,
  },
  sectionImage: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20
  },
  sectionContainer: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: '#fff',
  },
  sectionContainer1: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#47315a',
    borderBottomWidth: 0.2,
  },
  sectionContent: {
    marginLeft: 16,
    flex: 1,
  },
});
